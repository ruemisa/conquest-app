class UsersController < ApiController
  before_action :require_login, except: [:create]

  def create 
    user = User.create!(user_params)
    render json: { token: user.auth_token }
  end 

  def profile 
    user = User.find_by_auth_token!(request.headers[:token])
    render json: { user: {
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        email: user.email
    }}
  end 

  # TODO: See if you need to add dashboard here and in routes.rb 

  private 

  def user_params 
    params.require(:user).permit(:first_name, :last_name, :username, :email, :password, :password_confirmation)
  end 

end