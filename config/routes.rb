Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/tests', to: 'tests#index'
  get '/home', to: 'tests#home'
end
