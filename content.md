---
title: Hello, World!
permalink: /blog/content/cat/
layout: blog
---

{% for category in site.categories %}
  <div>
    <span class="title-medium">{{ category | first }}</span>
    {% for posts in category %}
      {% for post in posts limit:5 %}
         {% if post.url %} 
          <div class="postrow">
             <span class="date">{{ post.date | date: "%Y-%m-%d" }}</span> 
             <a class="title" href="{{ post.url }}">{{ post.title }}</a>
             <br/>
             <span class="excerpt">{{ post.excerpt }}</span> 
          </div>
         {% endif %}
      {% endfor %}
    {% endfor %}
    <hr/>
  </div>
{% endfor %}