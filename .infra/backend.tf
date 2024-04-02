terraform {

  required_version = ">=1.5.0"

  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 0.4"
    }
  }

  backend "local" {
    path = "state/terraform.prod.tfstate"
  }
}

provider "vercel" {
  # Set VERCEL_API_TOKEN environment variable in Github secret
  # api_token = var.vercel_api_token
  team = "team_vcUq3WfzzLvvTDy26HQVVUN1"
}