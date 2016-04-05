Rails.application.routes.draw do
  root 'home#index'

  resources :user, only: [:create]
end
