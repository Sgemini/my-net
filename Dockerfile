FROM ruby:2.5.0

ENV APP_HOME /sgemini/my-net

RUN gem install bundler
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get update -yqq && \
    apt-get install -y \
      nodejs \
      npm && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN npm install -g yarn

RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

COPY Gemfile Gemfile.lock package.json yarn.lock $APP_HOME/
RUN bundle install && \
    yarn install

COPY . $APP_HOME

EXPOSE 3000
CMD rails server