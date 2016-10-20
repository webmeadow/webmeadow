---
layout: page
title: Slides & Transcripts
permalink: /presentations/
subheader: header-sub4.jpg
---
<div class="home">
  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <div class="post-info">
            <a class="post-link" href="{{ post.url | prepend: site.baseurl }}"><img src="/images/presentations/{{ post.thumbnail }}" align="left"></a>
	        <h3>
	          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
	        </h3>
	        <section class="excerpt">{{post.excerpt | strip_html }}</section>
	      </div>
      </li>
    {% endfor %}
  </ul>

</div>
