class ParadiseController < ApplicationController
  def index
    @cates = Cate.first(10)
    @ingredients = Ingredient.first(10)
  end
end
