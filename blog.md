---
permalink: /blog/
---

{% for post in site.posts limit:1 %}
<script>
	window.location.href = "{{post.url}}"
</script>
{% endfor %}