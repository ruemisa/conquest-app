class ApiController < ApplicationController

  # User upon login gets token authenticated or throws an error if invalid credentials
  def require_login 
    authenticate_token || render_unauthorized("You shall not pass!")
  end

  def current_user 
    @current_user ||= authenticate_token
  end

  protected 

  # for the error if invalid credentials/token
  def render_unauthorized(message)
    errors = { errors: [ detail: message ] }
    render json: errors, status: :unauthorized
  end

  private 

  # checking for token under the user's table
  def authenticate_token 
    authenticate_with_http_token do | token, options |
      User.find_by(auth_token: token)
    end 
  end 

end
