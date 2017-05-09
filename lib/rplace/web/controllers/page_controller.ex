defmodule Rplace.Web.PageController do
  use Rplace.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
