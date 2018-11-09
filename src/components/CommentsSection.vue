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

		<div v-for="(comment, i) in comments" class="comment-box full-width m-y-xs">
			<div class="profile-pic">
				<i class="fas fa-user-circle"></i>
			</div>
			<div class="commenter-name text-semibold">
				{{ comment.commenter }}
			</div>
			<div class="comment-text text-regular m-b-xs">
				{{ comment.text}}
			</div>

			<button class="reply" @click="toggleReplyBox(i)">
				REPLY
			</button>

			<div v-for="(reply, i) in comment.replies"
					 class="comment-box reply full-width m-y-sm">
				<div class="profile-pic">
					<i class="fas fa-user-circle"></i>
				</div>
				<div class="commenter-name text-semibold">
					{{ reply.commenter }}
				</div>
				<div class="comment-text text-regular m-b-xs">
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
			this.$nextTick(function () {
				//this.$refs."comment-" + (n).$el.focus()
			})
		},
		addComment: function () {
			if (this.commentToAdd) {
				this.comments.unshift({
					id: 0,
					commenter: "TestUser",
					text: this.commentToAdd,
					replies: []
				})
				this.commentToAdd = ''
				this.showReplyBox = undefined
				this.$refs.commentField.blur()
			}
		},
		addReply: function () {
			if (this.replyToAdd) {
				this.comments[this.showReplyBox].replies.push({
					commenter: "TestUser",
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