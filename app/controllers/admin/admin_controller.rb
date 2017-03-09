class Admin::AdminController < ApplicationController
  def index
    @all_tables = ActiveRecord::Base.connection.tables
  end
end
