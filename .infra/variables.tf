variable "environment" {
  type    = string
  default = "prod"
}

variable "app_name" {
  type    = string
  default = "web-share"
}

variable "git_org" {
  type    = string
  default = "runthatup"
}

variable "client" {
  type    = string
  default = "runthatup"
}

variable "build" {
  type = object({
    command   = optional(string)
    framework = optional(string)
    install   = optional(string)
    root_dir  = optional(string)
  })
  default = {
    command   = "npm run build"
    framework = "nextjs"
  }
}
