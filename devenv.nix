{ pkgs, lib, config, inputs, ... }:
let 
  charm = inputs.fireplace.lib;
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
  (charm.web.astroScriptsBuilder { inherit pkgs port;} reserved-name);

}
