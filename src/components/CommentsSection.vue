<template>
	<div class="content p-xs">

		<div class="input-container sm m-b-sm">
			<div class="icon-container">
				<i class="fas fa-comment-alt color-placeholder"></i>
			</div>
			<resizable-textarea>
					<textarea :placeholder="commentBoxPlaceholder"
										v-model="commentToAdd"
										rows="1"
										ref="commentField"
										@keydown.enter="addComment()">
					</textarea>
			</resizable-textarea>
			<div v-if="commentToAdd" class="icon-container clear" @click="commentToAdd = ''">
				<i class="fas fa-times"></i>
			</div>
		</div>

		<h5 v-if="comments.length <= 0" class="color-muted m-t-md">
			There are no comments yet... :(
		</h5>

		<div v-for="(comment, i) in comments" class="comment-box full-width m-y-xs">
			<div class="profile-pic"
					 :style="{'background-image': genProfilePicURL(comment.picURL)}">
			</div>
			<div class="commenter-name text-semibold color-primary">
				{{ comment.commenter }}
			</div>
			<div class="comment-text text-regular m-b-xs color-default">
				{{ comment.text}}
			</div>

			<button class="button reply-btn" @click="toggleReplyBox(i)">
				REPLY
			</button>

			<div v-for="(reply, i) in comment.replies"
					 class="comment-box reply full-width m-y-sm">
				<div class="profile-pic"
						 :style="{'background-image': genProfilePicURL(reply.picURL)}">
				</div>
				<div class="commenter-name text-semibold color-primary">
					{{ reply.commenter }}
				</div>
				<div class="comment-text text-regular m-b-xs color-default">
					{{ reply.text}}
				</div>
			</div>
			<div v-if="showReplyBox === i"
					 v-input-focus-on-create
					 class="input-container sm m-y-sm">
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
import ResizableTextarea from '@/components/AutoResize.js'

export default {
	name: 'comments-section',
	components: {
		ResizableTextarea
	},
	data: function () {
		return {
			commentToAdd: '',
			replyToAdd: '',
			showReplyBox: undefined
		}
	},
	props: {
		comments: Array,
		commentBoxPlaceholder: String
	},
	computed: {

	},
	methods: {
		toggleReplyBox: function (n) {
			this.showReplyBox = this.showReplyBox === n? undefined : n
			this.replyToAdd = ''
		},
		addComment: function () {
			if (this.commentToAdd) {
				this.comments.unshift({
					commenter: "TestUser",
					text: this.commentToAdd,
					picURL: undefined,
					replies: []
				})
				this.commentToAdd = ''
				this.showReplyBox = undefined
				this.$refs.commentField.focus()
				this.$refs.commentField.blur()
			}
		},
		addReply: function () {
			if (this.replyToAdd) {
				this.comments[this.showReplyBox].replies.push({
					commenter: "TestUser",
					text: this.replyToAdd,
					picURL: undefined
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