class AdminController < ApplicationController
  http_basic_authenticate_with name: ENV['USERNAME'], password: ENV['PASSWORD']
  before_action :index_tables

  def cates
    @all_cates = Cate.all
  end

  private

  def index_tables
    all_tables = ActiveRecord::Base.connection.tables
    all_tables.delete('schema_migrations')
    @all_tables = all_tables
  end
end
