resource "vercel_project" "project" {
  name            = "${var.client}-${var.environment}-${var.app_name}"
  build_command   = var.build.command
  framework       = var.build.framework
  install_command = var.build.install
  root_directory  = var.build.root_dir

  git_repository = {
    type = "github"
    repo = "${var.git_org}/${var.app_name}"
  }
}
