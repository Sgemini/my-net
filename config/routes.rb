Rails.application.routes.draw do
  root 'home#index'

  get '/live-tips' => 'live_tips#index'
  get '/paradise' => 'paradise#index'

  get '/yang-web' => 'yang_web#index'

  scope :admin do
    get '/cates' => 'admin#cates'
  end
end
