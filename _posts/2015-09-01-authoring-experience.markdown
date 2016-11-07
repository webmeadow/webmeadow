---
layout: post
title:  Building a Better Authoring Experience
date:   2015-09-24 18:49:42
categories: presentations
thumbnail: authoring-experience.png
excerpt: Improving the back-end, administrative user experience for the folks who are in charge of editing and creating new content on your site.
---

<script async class="speakerdeck-embed" data-id="40746bbd65b944eb848e90ab1be552c0" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>


Versions of this talk and workshop were presented at [UX Burlington](http://uxburlington.com/), [IA Summit](http://iasummit.org/), and [Confab Intensive](http://confabevents.com/events/intensive). 

<iframe src=“https://player.vimeo.com/video/138048606?title=0&amp;portrait=0” webkitallowfullscreen=“” mozallowfullscreen=“” allowfullscreen=“” frameborder=“0” height=“281” width=“500”></iframe>

Video courtesy [Design & Content](http://designcontentconf.com/) in Vancouver, BC.

## Full Transcript

Good morning! I’m here today to talk about improving the user experience, not for the people who are visiting your site but actually for the people who are building your site. I’ll start by telling you a story, and you can just nod along if it sounds familiar. It goes something like this:

You launch a new site or maybe a new section of your site, and everything looks amazing! The article titles are all just the right length, the events in the calendar have all the right information in the right order, the teasers are teasing, the birds are singing, and everything is pretty darn good.

Then, three weeks pass, you click over to a page, and you see something like this [teaser sentence overrunning its box]. Or maybe you designed a header image that looks like this [high contrast image] and someone has created a new one that looks like this [low contrast image].

Or you open up a site on your phone or you look at some of the information that’s been pulled through APIs and feeds and you see stuff like this [truncated content that makes no sense], and the question running through your mind, pretty fundamentally, is: why are you breaking my site?

Like: I worked hard to make this site elegant and performant and responsive, and you authors, you site admins, you get your grubby little paws all over it, and you mess everything up. Why is that? What is so hard about this? When it’s time for someone to create a new post or update an image on the home page, let’s look what are they dealing with.

[raw HTML code] Whoa, hey, that can’t be right, right? I’m sure that no one here works on a site where your authors are expected to work in code, right? We wouldn’t do that to them. That’s not kind. And we certainly wouldn’t make them work in code that looks like this.

[raw HTML code, with syntax highlighting!] Oh, all right. That’s way better. Sweet, OK, this will be way easier for them to use. Definitely my favorite part about working on a site and entering in some new content is the piece where I time travel back to 1996\. Absolutely.

“But Eileen,” you say, “our authors don’t work in code. We have a CMS.” Well, OK, alright. Let’s look at a CMS.

[Joomla 1.5 screenshot] When the first CMSes came along, this interface, this was pretty snazzy. I mean look at this: you got fields, you got radio buttons, and look at all the formatting choices in this editor! There’s bold, there’s underline, there’s font family – because you absolutely want your authors choosing the font family. There’s binoculars for bird watching, there’s a purple horseshoe. You’re set, man, your authors can do anything they want. “But Eileen,” you say, “Joomla 1.5 came came out in 2006\. We’re not using that, we have a modern CMS experience and it is much nicer.”

Alright, let’s look at a modern CMS. [WordPress screenshot] Here’s the current version of WordPress. Really different. I notice that we’ve lost the bird watching, but we still have a purple horseshoe.

Here’s SiteCore, and here’s Adobe Experience Manager – I don’t know what all is happening in that column on the right, but in the center, it’s pretty much the same again. Here’s Expression Engine.

Oh, OK, here’s Drupal. Seriously? What the hell? On the front-end, we’ve gone all the way from shiny plastic Web 2.0 bubble buttons, into photorealistic skeumorphism, all the way into super flat digital-native “touchscreen ready” design. And on the back end we’ve advanced to… what, to modal windows?? This is not fair.

Here’s my theory. I think the authors is doing kind of a crap-ass job of this [maintaining page design consistency] because we’re doing a really crappy job at this [back-end authoring experience].

We talk about user-centered design, but the people on the back end of the site, they _use_ it more than any visitor ever does. How many testing sessions do we do with them? How many iterations are dedicated to fixing this monstrosity? So I want to talk to you about improving the authoring experience. This is a large topic, and today I’m just going to talk about one narrow slice: writing content guidelines.

What are content guidelines? Any sort of content creation that happens on your site – blog posts, event listing, service offerings, product pages – every piece of content has its own set of requirements, right? You’ve got ideal length, you’ve got format, underlying messages, intended audiences – it’s a lot to remember. In fact, it’s actually _too much_ to remember. Content guidelines are the ways that we attach reminders and help text to each field, each section, and each kind of content so that the authors can do their job well.

If we’re going to write content guidelines, it’s pretty important for us to understand who we are writing them for. When I talk about building guidelines for authors, who do I mean?

Maybe you work at a big organization and you’ve got a dedicated web team. There are people, writers usually, whose job is full-time creating and managing content for the website. Those are authors.

Maybe you work at an organization that doesn’t have a dedicated web team, and people from all over deal with content on the site. A university is a classic example of this: the food service department and the politics department and student life are all maintaining their own pages and sections on the site. It’s not really anyone’s true job, it’s just something they have to do as part of their tasks maybe once a month, or once a quarter. Those people, those occasional authors, they count. They’re authors.

Organizations that have volunteers, or really enthusiastic community users creating content on the site, those are also authors. Maybe they’re sharing stories of projects they’ve been doing in their own communities, maybe you have a network of people and your site is the communication tool that they use to share information. Maybe you have summer interns working through a backlog. Those kinds of people have never had any training in how to use your site and what’s more: they’re not ever going to have training in how to use your site. That’s not the kind of relationship they have with you. But they do need training, because the site isn’t going to work if they don’t understand where the content fits and how it’s going to be moved around on the site.

And then lastly we’ve got you. Maybe you’re an author. This is sometimes the hardest sell, because you’re like, “why would I bother documenting something that I do literally every day?” Two reasons: One, you might get eaten by a bear and then no one will know how to do your job. It happens. And two, is that you’re not actually doing this for now-you or even for tomorrow-you. You’re doing this for three-months-from-now, Friday-afternoon-you, who is creating a press release, and you don’t do it that often and what size are the images supposed to be, and you’re coming down with a cold, and you’d really like to go home. You’re doing it for that you.

It’s pretty obvious why casual editors would need help and reminders, but even full-time authors they get distracted, they have bad days, they’re working on five different projects at once, and well written guidelines are helpful for absolutely everyone.

The very first step to building content guidelines is to figure out how to structure your content. You have to build a content model. If you work in information architecture, or content strategy, or user experience, this is probably familiar to you. When I say “content model” what I mean is a breakdown of all the content types and relationships on your sites. Notice I didn’t say “all of the _content_ on your site”, but “all of the _content types_”. We’re not exactly looking at _what_ it is we’re saying. Instead we’re looking at the _patterns_ in how we say it.

Structured content is what you get when you break down a larger piece of content into its component parts. By international treaty, I am not allowed to talk about content models without using a recipe as an example. If you look at recipe (this is from Epicurious, it is an incredibly delicious ginger cake). If you look at recipes, you start to see patterns: they’ve got a name, author, description of what the cake is like, number of servings (10 to 12? No. Maybe, like, 6 if you want some for breakfast the next morning). Next we see an ingredient list, and instructions.

Often we get to the part where we see instructions – long-form content – and we stop and say, “that’s as much as this can be broken down.” But if you’re looking at baking recipes, there’s almost always a preheat for the oven, there’s pan preparation, there’s usually a garnish at the end, so just because something is in long-form doesn’t mean that that’s as granular as it can get. It can get more granular sometimes.

We’re looking for patterns in the information. And then we also have metadata at the end of this recipe. And metadata is a buzzword thing right now, but when I use the word metadata, I mean information _about_ the content that isn’t _of_ the content. We’ve got some tags here on the bottom: entertaining, cake, this one is tagged both Fall and Mother’s Day, it’s a year-round cake, I like that.

And so these are things that help us categorize and help us sort the information. You can imagine that you could say: show me all the recipes that are desserts that don’t have dairy in them. Metadata helps us sort, helps us filter, helps us regroup information dynamically.

Figuring out your content model is a matter of looking across all of your content (or a good sample of your content) and then teasing out the repeating patterns. It sounds like a lot of work, frankly. Why are we bothering? Why are we building this content model?

Content models help you create consistent content, because if you show someone a big blank box and you say OK, put the recipe in here, good luck down the line having a bunch of recipes that are actually consistent. But if you show them a form instead, and you break stuff down into individual fields, and if each field has its reminder for what kind of information belongs in it, what voice and format each message should take; now we’re getting somewhere. Writing content guidelines for a giant blank box is pretty impossible, but writing for a simple form is a lot more reasonable:

Let’s talk about writing help text. When it comes to writing help text, you have to find a middle point, right? You can’t write three paragraphs of text for a single field, because no one will read it. You want to provide enough information that people can do their jobs and understand what it is that the field needs, without providing so much that they’re just going to skim past it.

I did this talk a month ago and someone asked me afterwards, “How do you figure out what pieces of information to put in?” Like, what’s the most important thing? And the truth is that the most important thing changes all the time. It’s different for every organization. It’s not like I can tell you you need to put in message architecture stuff, or you need to put in design stuff. It’s different based on who you’re dealing with.

I have a bunch of clients that I’ve worked with where what we need to put in the help text – I would love for it to be something high-level and philosophical, like who we’re writing for, and “Remember your audience has this target reading level”, and what I have to put instead is “DO NOT WRITE THE WORDS _CLICK HERE_.” And that’s where they’re at right now. Hopefully down the line, we review the guidelines later on and decide “oh good, we’ve broken that habit.” Good, but for now you have to write kind of gross help text because that’s what people need to hear sometimes.

I’m going to talk about a bunch of categories of information, the kinds of things that might end up in your content guidelines. We’ll start with names. What is this content? Is it a recipe, a biography? And what’s the description of this content type? This is especially important if you are moving from a system where everything lived in a single kind of entry form or a single page. How do people know whether something lives now in News or Blog post? Like, how do they make the decision to put something in Events versus in a News entry? Most CMSes have a place where you can put a description that will show up at the top of the edit screen; it helps people understand what is this content type is supposed to hold.

Field names: I want to encourage you to replace all generic field names like “Body” with labels like “Event Description”. It can seem heavy-handed but that gives your authors context. Even though you’re saying “Event” over and over again, it reminds them that yes, this content is all about an Event.

Next we’ve got Editorial. Editorial is about what we were saying and how we’re saying it. So this is voice and tone, underlying messages, if you have attitudinal things where you’re saying “we want to be supportive” or “we want to be firm”. Grammar reminders like: should this headline be in the form of a question? Should this be a declarative?

And then information that should or should not be included. Again, if you’re moving from a system where stuff used to be all in one single field, and now you’re separating it out, it can be really helpful to remind people, “Don’t put the date in the teaser,” because the date is pulled out in its own field and if you also put it in the teasers, it’s going to be redundant. This is also a nice place where you could link to a style guide; you can’t put the entire style guide in a little help text box, but if you can link to a style or design guide, people won’t have to go find a document that will help them.

Where Editorial was “what it says”, Format is more like “how it’s shaped”. Information like field lengths and data format: if you’re doing something in measurements, should it be in centimeters, or should it be in inches? This can be a nice place with an example, to give people the clue as to what the format is supposed to be. How many decimal places are you using, that kind of stuff.

If the field accepts HTML, let users know what tags it will accept and which ones it will strip. I have a clients who has an input form that lets people make things that are pink and sparkly and underlined and when they submit it, it’s just black and white. And they get calls to their IT customer service all the time, saying, “where did my pink underline go?” If you’re going to give people the ability to use real HTML, make sure to let them know what sort of stuff will actually get carried through to the live site.

For checkboxes or select lists, how many selections are allowed? Some of these format questions, like field length and checkboxes, you could validate the form and not let people put things in unless they meet your requirements, and sometimes that works really well. But sometimes your needs are a little more complicated than that, and while you could write the Javascript validation to say “when it’s in this category you’re allowed to pick three checkboxes but when it’s in this other category you’re only allowed to pick one check box”. You could write the complex JavaScript, or could you write it in a single human English sentence.

For Images: shape and size, and how is the image going to be used? Is this going to be resized to a thumbnail (in which case some incredibly detailed shot is not going to be useful)? Is it going to be cropped for a wide banner across the page? If you have any sort of design background, the art direction piece of photos, like: you designed this layout to work perfectly with closeup macro shots of food, and someone puts in the proverbial university photo with a girl under a tree reading a book, it messes up the entire sense of the page. So if there’s art direction: should the image be breaking the fourth wall looking at the camera? Or this should be an action shot? Whatever those kinds of things are that keep the mood of the page correct, you’ve got to let people know, because otherwise they will break it.

And then finally Display, like what is this content actually doing? Does putting something in a category mean it’s going to be pulled into related content widgets in the sidebar? Are categories and tags being used for browsing, for filtering? Are people on the front-end seeing them? Help people understand how detailed they need to be with their taxonomy.

Will the contents be displayed alongside other fields? This is really big for teasers. If you have a layout where you have teaser field and then a full description: if they’re going be to displayed right next to each other, and the author takes the first two lines of the full description to use in the teaser, that’s going to be weird: 4 sentences in a row that say the same thing. People need to know this stuff so they don’t create a really bizarre user experience.

That’s a lot of stuff, right? There are a lot of bullet points on those slides. Where do you get all this information? Who should actually be involved in creating these content guidelines?

Designers are really great resource to talk to. Designers, in my experience, often have a piece of the design that they’re very protective of and they’re like, “look, this sidebar, if the title gets too long it is going to look all weird, if you take a photo that does not have a blue undertone it is going to ruin the entire mood of the page.” They know these things and they’re like, “I’m just waiting for you guys to poop all over it.” So you talk to the designers. Figure out what kind of information you could share with your admins to make sure they’re not going to make those mistakes.

Similarly developers who actually build the features on the site, they often reach a point where they think, “does anyone besides me actually understand how the tags and the categories fuel the related content posts?” No, the answer is that no, no one besides you understands that and you need to share it and document it so that other people start to understand how the structure of the site is working.

Marketing, of course, always has a lot to say about everything. Branding messages, keywords, corporate initiatives that you’re trying to promote, all that kind of stuff.

The content team, which might only be a single content person, they have a lot of information tied up in just normal job knowledge that they sort of don’t even understand is special knowledge. It can be hard to tease that out of them. The best luck I’ve had is actually shadowing the content person and just sitting with them for a while. And you can follow along: “right, I get what you’re doing here, I get what you’re doing here” and then they flash over to some other screen and copy a thing and come back and you’re like, “whoa, what was that?”

“Well, that’s the manufacturer’s spreadsheet on the Z drive, and I have to go copy an ID number out of it for this field.” And you’re like, “I didn’t even know we had a Z drive!” Hot tip: there’s always a Z drive somewhere.

That’s the type of thing they would never think to tell you, because it’s just a part of their routine. So if you can shadow them, then you can document it, so that when that poor person gets eaten by a bear, you can still work on the website.

If you are lucky enough to work in an organization that has a customer service department or QA, those people are an amazing source of information. Because they know all the tiny problems like “people call all the time asking for the shipping weight because it’s only on half of the product pages.” You probably know about the big major problems with your site, but these people, they fix little things and don’t think to tell anyone about it, because that’s their job. That is what we pay them for, but they’re just such a great source of information so you can stop those problems before they even start.

As you’re gathering these guidelines, you actually have to talk them through with the people who are going to use them and if you take nothing away from this entire talk – besides bear safety – take this away: that you have to build things with people, and not for them.

If you’re creating a tool for someone, see if you can avoid the big reveal. See if you can avoid the part where you work on something in silence, and then at some point you pull back the curtain and show them this amazing thing you made. Because here’s what’s going to happen: you’re going to unveil the thing, and they’re going to be like cool, thanks. Yeah. ¯_(ツ)_/¯

Because if you don’t check in with them in the middle, you don’t know that what you’re building is helpful for them. I was working with an organization that supplies cameras and photography lessons to schools and to kids in inner city DC (and the larger DC area) to document the problems they were having with their schools, like leaking roofs and windows and crappy building conditions, and they would put on these art shows in proper galleries that were full of these students’ photos and they would invite the school board and the legislators to come to the art shows. Super amazing work. They did not need any image advice in their help guidelines, I did not need to tell them anything like art direction or what size and format photos, that was their bread and butter. They knew how deal with the photos. But if I didn’t talk with them I would have wasted a bunch of time putting in photo help when they didn’t need it.

If you are not in a work culture that currently shares drafts, that is in the habit of sharing half-done work, this is terrifying. It is legitimately scary to share a thing that you know isn’t good, that you know isn’t done, and you’re like, “OK, I don’t want _you_ to think that _I_ think that this is any good.” It’s not, but you have to. Being able to adjust in the middle and to course-correct and to build something that is genuinely useful for people is worth the fear. So know that it is a valid fear, and it is a true fear, but it is holding you back from doing your best work.

OK, so you’re going to go back to work next week and you’re going to start this big project and it’s going to be awesome and you’re going to write down and gather all these content guidelines. How do you get them from your text file or your notebook into your author brains?

Well, here’s the way we traditionally communicate them. PDFs. Oh, yeah!

Maybe you’re like, we already build content guidelines, we put them in a PDF and we send them out to our users. I get this, PDFs are easy, you write the thing and you “Save as” – you can do it yourself, you don’t need any development resources, you can get really picky about formatting, you can do three columns and diagrams, I get that. But here’s the trick about PDFs: no one reads them. And that kind of belies the whole point.

The other thing about PDFs is you’re always going to have multiple versions floating around. Do we have any knitters in the audience? Yeah, so knitters nowadays, for those of you who are yarn ignorant… We buy our patterns as PDFs online now, and we get automatic pattern updates. Sometimes I’ll knit a sweater and then, like a month or two later, I’ll get an update from the pattern author saying, oh, hey, it turns out that the medium version of that sweater has three arms, oops, and so I sent you an updated pattern that corrects the error.

I do not download those PDFs. I leave them in my Revelry, which is the online social network for knitters, and I leave them in the Revelry cloud. I know that I’m shooting myself in the foot. I’m just hoping that I’m too fickle to knit the same sweater twice.

But this is what happens with PDFs, right: someone downloads a version to use on the plane and then they never update it, there’s always going to be a ton of versions. I feel like we have to change our tactics. So this is a radical idea here. What if – what if! – if the content is being entered on a CMS form, that you put the guidelines on the CMS form.

AUDIENCE MEMBER: What?!

Right, what? Great revolutions happening up here, people.

We all have this appliance on in our home that has a button on it that we don’t know what it does. My microwave has a cursive Q with the number 3 next to it. I don’t know what it does. I’m not going to press it! I could look it up in the manual, I guess, but the manual lives in the manual drawer which is in a different room, and I’m never gonna go get it to find out. This is what happens when we segregate our content guidelines into PDFs that are separate from the actual interface that we’re working in. One of the pros to putting guidelines in the CMS is that the information is right where it’s needed. People will still not read them sometimes, because you have met human beings, but at least there’s no good excuse for that.

Another great pro is that the fields can be organized and grouped to make your content entry in whatever order makes the most sense for the authors. Maybe you’re grouping similar fields together, like short description and long description are right next to each other. Or maybe you’re grouping things with how they’re going to be displayed so the thumbnail image and the teaser description all live together in a fields. Maybe you’ve got legacy systems and during migration it can be really helpful to organize fields so that you don’t have to jump around the page if you’re moving content from an old system to a new system.

In pretty much all CMSes that I know of, you can organize the back end however is most helpful to the authors and organize the front end however is most helpful to your users, and those don’t have to match. They often won’t.

Another great pro is that we get to customize the AX [authoring experience]. I didn’t invent this term but I use it like it’s a real thing and eventually it will be. Improving the UX of the authoring experience just makes people’s jobs easier. That might mean having a calendar widget for choosing a date. Maybe have some default text if there’s something that’s really common and have people edit it if they need to. Select lists instead of text boxes, autocompletes for creating relationships between content. It’s basically doing things that help your particular set of users have an easier time.

This microwave has a grilled cake button. My microwave has a potato button, and I love potato button with all my heart, but this audience doesn’t need a potato button, it needs a grilled cake button. I also need one of these microwaves.

The last great thing about putting the guidelines right in the CMS is that you know people are always using the right version. You don’t have to worry about somebody using an old version or having some legacy instructions that are not quite right. If you introduce new initiatives or if you decided to rename one of your internal programs, you can put that information right in context in the CMS screen and people don’t have the chance to not think about it or not read the memo.

The one downside to putting stuff into the CMS is that you may need some development resources to do this. This is not a bad thing inherently, but it can be a roadblock if you need a developer to make this work. There are plenty of CMSes where you can enter the help text in a nice GUI, and so maybe you need half an hour of a developer’s time to make sure you have the right permissions and then you can go to town. But there are other CMSes where the help text needs to be hardcoded into an editing template and so that probably means you’ll need development resources, budget, timeline, all that sort of stuff to help it happen. I don’t want to downplay that this isn’t always the easiest thing.

You might be like, “Thanks, Eileen, next time I redo my site from scratch this is going be to awesome and I’ll pick a system that can do all this stuff, but over here in the real world I’ve got a site already, it just got rebuilt and it doesn’t do any of these things.” Now what do we do?

I think there is true value in understanding and believing in the ideal end product even if you can’t get there right now. Because it means that the half-steps and half-measures that we take are at least carrying us in the right direction. What does that look like for content guidelines?

Bare minimum, if you do nothing else, put a link to the content guidelines on the top of your editing screen. This means that your authors at least have a direct easy link to your content guidelines PDF somewhere. It’s not perfection, but it’s progress, and it is worth doing.

If you can do a little more, ditch the PDF and get your guidelines into HTML. PDF is a completely untenable way to keeping a living document. And it is really nice to know that everyone is always using the most updated version of the guidelines.

If you have an intranet or a SharePoint (sorry, sorry for so many reasons if you have a SharePoint), you can put these pages on your intranet. Or, you can put them in your CMS and you can leave that as an entry that only admins can see. There are ways that you can do this very formally: create a permissions-based thing that only administrators see these particular sets of content. Or, you can also just leave it in draft format: put the guidelines in entry, save it as a draft or unpublished so the only people who can see it are people who have permission to publish entries. That is tacky as heck but it works so who cares. If that’s what you need to do to get your guidelines into HTML and to get your authors reading them, go for the hack.

And finally, keep talking to your team. Check in regularly with designers and developers. Is there something that they’ve noticed has been breaking and could use a little bit more guidance? Are there places where something isn’t working in the real world like they intended to it? With authors and editors, are there there places where they kind of still don’t understand what this field is for? And QA, are they silently fixing stuff? Like, that is their job, but are they silently fixing stuff that you could fix systemically before it gets to them?

I used to think that it was pretty inevitable, that a few months after site launch that there would be misused fields and confusing headlines littering a site, that particular kind of chaos that comes with combining a powerful CMS with untrained content editors. But when we embed the instructions where they are most relevant and helpful, we’re helping our authors build good habits, and we’re helping them build confidence in these pretty complex sites that we’re building for them to work with. We’re allowing them to create a place of safety and a place of comfort where they can know that they are doing their jobs well, where they can have the confidence that they are creating and maintaining an organizational linchpin, which is pretty invaluable.

A website that looks perfect on launch day, that’s cool, that’s a really neat thing to launch a beautiful, perfect website. But when we improve the authoring experience we’re improving the content forever and I think that’s a whole lot more satisfying.