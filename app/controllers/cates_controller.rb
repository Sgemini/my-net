class CatesController < ApplicationController
  def index
    @cates = Cate.all
  end

  def show
    @cate = Cate.find(params[:id])
  end
end
