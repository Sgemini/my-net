Rails.application.routes.draw do
  ActiveAdmin.routes(self)
  root 'paradise#index'

  scope :paradise do
    resources :cates, only: [:index, :show]
    resources :ingredients, only: [:index, :show]
  end
end
