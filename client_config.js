// set local client-side config
window._config = {

    // if true, will use cookies and localstorage instead of server to store data
    use_browser_storage: true,
	
	// how many columns we can have
	max_columns_count: 6,

    // max cards we allow on all columns
    max_cards: 500,

    // max description length of a card
    max_card_description_length: 15000,

    // play this alarm sound when deadline expires (url or null to disable)
    play_alarm_sound: "alarm.wav",

	// how many deleted cards we can keep
    max_deleted_cards_to_keep: 50,
}