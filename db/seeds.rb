# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

10.times do |t|
  # 食材数据
  c = Cate.create(name: t.to_s + '个赞')
  # 食材点赞
  Vote.create(vote_count: t, cate_id: c.id)

  # 时令食材
  Ingredient.create(name: '春季食材' + t.to_s, season: 'spring')
  Ingredient.create(name: '夏季食材' + t.to_s, season: 'summer')
  Ingredient.create(name: '秋季食材' + t.to_s, season: 'autumn')
  Ingredient.create(name: '冬季食材' + t.to_s, season: 'winter')
end
