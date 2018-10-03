Rails.application.routes.draw do
  
  post '/login' => "sessions#create"
  delete '/logout' => "sessions#destroy"

  resources :users 
  resources :markers

  get '/profile' => "users#profile"
  get '/dashboard' => "users#dashboard"
end
