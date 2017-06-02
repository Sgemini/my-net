Rails.application.routes.draw do
  ActiveAdmin.routes(self)
  root 'home#index'

  get '/live-tips' => 'live_tips#index'
  get '/paradise' => 'paradise#index'
  get '/yang-web' => 'yang_web#index'

  scope :paradise do
    resources :cates, only: [:index, :show]
  end
end
