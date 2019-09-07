Rails.application.routes.draw do
  get 'rails/g'
  get 'rails/controller'
  get 'rails/api/benches'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :benches, only: [:index, :create]
  end

end
