# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :rplace,
  ecto_repos: [Rplace.Repo]

# Configures the endpoint
config :rplace, Rplace.Web.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "Qyzo4+GriHYos/ajjMtcV6dESt/mS6XOhNt/e9nUdP/yaeXHgWaEE3IWBwkvAH1b",
  render_errors: [view: Rplace.Web.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Rplace.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
