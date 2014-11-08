---
title: Hello, World!
permalink: /blog/content/
layout: blog
---

{% for category in site.categories limit:5 %}
  <li><a name="{{ category | first }}">{{ category | first }}</a>
    <ul>
    {% for posts in category %}
      {% for post in posts %}
         {% if post.url %} 
             <li>{{ post.date | date: "%D" }} <a href="{{ post.url }}">{{ post.title }}</a> {{ post.excerpt }} </li>
         {% endif %}
      {% endfor %}
    {% endfor %}
    </ul>
  </li>
{% endfor %}