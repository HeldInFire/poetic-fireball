{ pkgs, lib, config, inputs, ... }:
let 
  
in

{
  languages = {
    javascript = {
      enable = true;
      package = pkgs.nodejs_22;
      pnpm.enable = true;
    };
  };

  # https://devenv.sh/packages/
  packages = [ 
    pkgs.git
    pkgs.zrok
    pkgs.qrencode
  ];

  scripts = 
  let 
    port = "2002";
    reserved-name = "j628afbr91lt";
  in
  {
    tunnel.exec = "zrok share reserved ${reserved-name}";
    qr.exec = "qrencode -t ANSIUTF8 'https://${reserved-name}.share.zrok.io'";
    server.exec = "pnpm dev --port ${port} --host";
  };

}
