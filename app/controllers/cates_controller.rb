class CatesController < ApplicationController
  def index
    @factions = Cate.distinct.pluck(:faction).compact
  end

  def show
    @cate = Cate.find(params[:id])
  end
end
