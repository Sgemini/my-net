class NewsController < ApplicationController
	def index
		news = News.all
	end

	def show
		news = News.find_by(news_params)
	end

	private

	def news_params
		params.require(:news).permit(:id, :title, :content)
	end
end
