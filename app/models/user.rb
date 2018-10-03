class User < ApplicationRecord

  has_many :markers

  validates_uniqueness_of :username, :email
  has_secure_password
  # method built in rails ( this project has me learning new things lol ) 
  has_secure_token :auth_token
  
  # To invalidate token upon logout 
  def invalidate_token 
    self.update_columns(auth_token: nil)
  end 

  # validates login creds 
  def self.validate_login(username, password)
    user = find_by(username: username)
    if user && user.authenticate(password)
      user 
    end 
  end 

end
