class CreateCates < ActiveRecord::Migration
  def change
    create_table :cates do |t|
      t.string :title
      t.text :body

      t.timestamps
    end
  end
end
