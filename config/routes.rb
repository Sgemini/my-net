Rails.application.routes.draw do
  root 'home#index'

  get '/live-tips' => 'live_tips#index'
  get '/paradise' => 'paradise#index'
end
