class CreateCate < ActiveRecord::Migration
  def change
    create_table :cates do |t|
    	t.string :title
    	t.text :content
    end
  end
end
