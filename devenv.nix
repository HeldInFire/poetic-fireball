{ pkgs, lib, config, inputs, ... }:
let
  PORT = "1969";
  SITE_URL = "http://localhost:${PORT}";
in
{
  scripts = {
    run.exec = "pnpm dev --port ${PORT}"; 
    o.exec = ''chromium "${SITE_URL}"''; 
  };
}
