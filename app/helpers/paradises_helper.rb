module ParadisesHelper
  def hot_cates
    Cate.includes(:vote).order('votes.vote_count desc').first(12)
  end

  def season_ingredients
    time_now = Time.now.strftime("%B %d, %Y")
    winter = (DateTime.new(Time.now.last_year.year, 12, 22)..DateTime.new(Time.now.year, 3, 20)).cover?(time_now)
    spring = (DateTime.new(Time.now.year, 3, 20)..DateTime.new(Time.now.year, 6, 21)).cover?(time_now)
    summer = (DateTime.new(Time.now.year, 6, 21)..DateTime.new(Time.now.year, 9, 23)).cover?(time_now)
    autumn = (DateTime.new(Time.now.year, 9, 23)..DateTime.new(Time.now.year, 12, 22)).cover?(time_now)

    case 
    when spring
      _season_ingredients('spring')
    when summer
      _season_ingredients('summer')
    when autumn
      _season_ingredients('autumn')
    when winter
      _season_ingredients('winter')
    end
  end

  private

  def _season_ingredients(season)
    Ingredient.where(season: season).limit(16)
  end
end
