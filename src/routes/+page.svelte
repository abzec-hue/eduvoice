<script>
    import Navbar from '$lib/components/Navbar.svelte';
    import Textbox from '$lib/components/Textbox.svelte';
    import Dropdown from '$lib/components/Dropdown.svelte';
    import TemplatesSidebar from '$lib/components/TemplatesSidebar.svelte';
    
    let userText = '';
    let selectedTone = '';
    let selectedVoice = '';
    
    function handleTextUpdate(event) {
        userText = event.detail.text;
    }
    
    function handleToneSelect(event) {
        selectedTone = event.detail.tone;
    }
    
    function handleVoiceSelect(event) {
        selectedVoice = event.detail.voice;
    }
    
    function handleTemplateDrop(event) {
        userText = event.detail.text;
    }
</script>

<style>
    .page-container {
        font-family: Arial, Helvetica, sans-serif;
        padding: 100px 20px 40px 20px;
        min-height: 100vh;
        margin: 0;
    }

    .main-content {
        display: flex;
        gap: 30px;
        max-width: 1200px;
        margin: 0 auto;
        align-items: flex-start;
    }

    .left-section {
        width: 280px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        flex-shrink: 0;
        margin-top: 60px;
    }

    .form-section {
        flex: 1;
        margin-top: 60px;
        
    }
</style>

<Navbar />

<div class="page-container">
    <div class="main-content">
        <div class="left-section">
            <Dropdown 
                {selectedTone}
                {selectedVoice}
                on:toneSelect={handleToneSelect}
                on:voiceSelect={handleVoiceSelect}
            />
            
            <TemplatesSidebar on:templateDrop={handleTemplateDrop} />
        </div>

        <div class="form-section">
            <Textbox 
                {userText}
                on:textUpdate={handleTextUpdate}
            />
        </div>
    </div>
</div>