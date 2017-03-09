class Admin::AdminController < ApplicationController
  http_basic_authenticate_with name: ENV['USERNAME'], password: ENV['PASSWORD']
  def index
    @all_tables = ActiveRecord::Base.connection.tables
  end
end
