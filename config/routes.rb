Rails.application.routes.draw do
  root 'home#index'

  get '/live-tips' => 'live_tips#index'
end
