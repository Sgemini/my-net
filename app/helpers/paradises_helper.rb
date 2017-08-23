module ParadisesHelper
  def hot_cates
    Cate.includes(:vote).order('votes.vote_count desc').first(12)
  end

  def season_ingredients
    time_now = Time.now.strftime("%B %d, %Y")
    case time_now
    when time_now > DateTime.new(Time.now.year,3,20) # 春分
      _season_ingredients('spring')
    when time_now > DateTime.new(Time.now.year,6,21) # 夏至
      _season_ingredients('summer')
    when time_now > DateTime.new(Time.now.year,9,23) # 秋分
      _season_ingredients('autumn')
    when time_now > DateTime.new(Time.now.year,12,22) # 冬至
      _season_ingredients('winter')
    end
  end

  private

  def _season_ingredients(season)
    Ingredient.where(season: season).limit(16)
  end
end
