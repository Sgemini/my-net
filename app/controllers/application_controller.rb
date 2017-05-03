class ApplicationController < ActionController::Base
  include CanCan::ControllerAdditions
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :set_body_id

  def set_body_id
    @body_id = "#{params[:controller]}-#{params[:action]}"
  end
end
