class CreateLiveTips < ActiveRecord::Migration
  def change
    create_table :live_tips do |t|
    	t.string :title
    	t.text :body
    end
  end
end
