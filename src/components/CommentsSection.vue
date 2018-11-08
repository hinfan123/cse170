<template>
	<div class="content">

		<div class="input-container sm m-b-sm">
			<div class="icon-container">
				<i class="fas fa-comment-alt color-placeholder"></i>
			</div>
			<input type="text"
						 ref="commentField"
						 placeholder="What do you think about this recipe?"
						 v-model="commentToAdd"
						 @keyup.enter="addComment">
			<div v-if="commentToAdd" class="icon-container clear" @click="commentToAdd = ''">
				<i class="fas fa-times"></i>
			</div>
		</div>

		<div v-for="(comment, i) in commentList" class="comment-box full-width m-y-xs">
			<div class="profile-pic">
				<i class="fas fa-user-circle"></i>
			</div>
			<div class="commenter-name text-semibold">
				{{ comment.commenter }}
			</div>
			<div class="comment-text text-regular m-y-xs">
				{{ comment.text}}
			</div>

			<button class="reply" @click="toggleReplyBox(i)">
				REPLY
			</button>

			<div v-for="(reply, i) in comment.replies"
					 class="comment-box reply full-width m-y-xs">
				<div class="profile-pic">
					<i class="fas fa-user-circle"></i>
				</div>
				<div class="commenter-name text-semibold">
					{{ reply.commenter }}
				</div>
				<div class="comment-text text-regular m-y-xs">
					{{ reply.text}}
				</div>
			</div>

			<div v-if="showReplyBox === i"
					 v-input-focus-on-create
					 class="input-container sm m-t-sm">
				<div class="icon-container">
					<i class="fas fa-reply color-placeholder"></i>
				</div>
				<input type="text"
							 :ref="'comment-' + comment.id"
							 placeholder="Write a reply..."
							 v-model="replyToAdd"
							 @keyup.enter="addReply()">
				<div v-if="replyToAdd" class="icon-container clear" @click="replyToAdd = ''">
					<i class="fas fa-times"></i>
				</div>
			</div>

		</div>
	</div>
</template>

<style scoped lang="scss">
</style>

<script>
import _ from 'lodash'

export default {
	name: 'comments-section',
	components: {
	},
	data: function () {
		return {
			commentList: [
				{
					id: 1,
					commenter: "The commenter's name",
					text: "This is a comment. Comments could be very long and may expand to multiple lines. Comments should help enhance the recreation aspect of our apps by allowing users to socialize and share opinions with others about their cooking.",
					replies: [
						{
							commenter: "Replier's name",
							text: "This is a reply to a comment, it could be as long as the user wishes"
						},
						{
							commenter: "Replier's name",
							text: "This is a reply to a comment, it could be as long as the user wishes"
						}
					]
				},
				{
					id: 2,
					commenter: "The commenter's name",
					text: "This is a comment. Comments could be very long and may expand to multiple lines. Comments should help enhance the recreation aspect of our apps by allowing users to socialize with others about their cooking.",
					replies: [
						{
							commenter: "Replier's name",
							text: "This is a reply to a comment, it could be as long as the user wishes"
						},
						{
							commenter: "Replier's name",
							text: "This is a reply to a comment, it could be as long as the user wishes"
						}
					]
				}
			],
			commentToAdd: '',
			replyToAdd: '',
			showReplyBox: undefined
		}
	},
	props: {
	},
	computed: {

	},
	methods: {
		toggleReplyBox: function (n) {
			this.showReplyBox = this.showReplyBox === n? undefined : n
			this.replyToAdd = ''
			this.$nextTick(function () {
				//this.$refs."comment-" + (n).$el.focus()
			})
		},
		addComment: function () {
			if (this.commentToAdd) {
				this.commentList.unshift({
					id: 0,
					commenter: "Username",
					text: this.commentToAdd,
					replies: []
				})
				this.commentToAdd = ''
				this.$refs.commentField.blur()
				this.showReplyBox = undefined
			}
		},
		addReply: function () {
			if (this.replyToAdd) {
				this.commentList[this.showReplyBox].replies.push({
					commenter: "Username",
					text: this.replyToAdd
				})
				this.replyToAdd = ''
			}
		}
	},
	created: function () {
	},
	watch: {
	}
}
</script>