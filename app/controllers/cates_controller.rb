class CatesController < ApplicationController
  def index
    @cates = Cate.all
  end
end
