/* Conversation compaction constants */
import { CONVERSATION_ID_SEPARATOR } from './stream.constants';

const SUMMARY_PLACEHOLDER = '{{SUMMARY}}';

export const COMPACTION = {
	CONTEXT_TEMPLATE: `This conversation was compacted. Summary of the earlier exchange:\n\n${SUMMARY_PLACEHOLDER}`,
	DEFAULT_PROMPT:
		'Summarize this conversation so it can seamlessly continue in a fresh context. ' +
		'Capture: the overall goal and the decisions taken; every file read, created or edited, with its path and the part it plays in the work; ' +
		'the changes themselves, quoted as compact diff hunks - for edit_file the old_text/new_text pairs, for write_file the content that matters - ' +
		'because the diff carries more than any description of it; the commands run and the parts of their output that matter; ' +
		'the current state of the ongoing work; and what remains to be done. ' +
		'Write the summary as dense prose addressed to the assistant that will resume the conversation, keeping code and diffs in fenced blocks. ' +
		'Return ONLY the summary, nothing else.',
	// Setting value standing for "no dedicated model", so the conversation
	// model writes the summary.
	MODEL_UNSET: '',
	// Server stream sessions are matched by exact id or by the id::* prefix,
	// so a prefixed identity keeps the summary stream inside the visibility
	// kick and byte-offset resume machinery while the reload probe for the
	// bare conversation id can never reattach it as a chat turn.
	STREAM_ID_PREFIX: `compact${CONVERSATION_ID_SEPARATOR}`,
	SUMMARY_PLACEHOLDER
} as const;
