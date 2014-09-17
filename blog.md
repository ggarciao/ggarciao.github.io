---
title: Hello, World!
permalink: /blog/
layout: blog
---

# Hello World

Proin eleifend libero accumsan felis luctus nec consectetur purus commodo. Phasellus sodales est nec massa imperdiet commodo. Maecenas risus nulla, placerat vel vestibulum vel, dapibus quis libero.

Donec libero libero, bibendum non condimentum ac, ullamcorper at sapien. Duis feugiat urna vel justo cursus facilisis. Vivamus ligula dui, convallis a varius vitae, facilisis eget magnax.

{% for category in site.categories %}
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