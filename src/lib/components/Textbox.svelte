<script>
    // import { validateText, getValidationMessage } from '$lib/validation.js';
    
    export let userText = '';
    export let selectedFile = null;
    export let fileName = '';
    
    let isPlaying = false;
    
    function handleSubmit(event) {
        event.preventDefault();
        const { cleanText, hasBadWords, detectedWords } = validateText(userText);
        
        if (hasBadWords) {
            userText = cleanText;
            const message = getValidationMessage(detectedWords);
            alert(`Strong language detected\n\n${message}\n\nChanges have been made.\n\nProceed by clicking OK.`);
            return;
        }
        
        console.log('Submitted text:', userText);
    }
    
    function handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
            selectedFile = file;
            fileName = file.name;
            dispatch('fileSelect', { file: file, name: file.name });
            
            if (file.type === 'text/plain') {
                const reader = new FileReader();
                reader.onload = (e) => {
                    userText = e.target.result;
                    dispatch('textUpdate', { text: userText });
                };
                reader.readAsText(file);
            }
        }
    }
    
    function triggerFileInput() {
        document.getElementById('file-input').click();
    }
    
    function removeFile() {
        selectedFile = null;
        fileName = '';
        dispatch('fileRemove');
    }
    
    function togglePlay() {
        isPlaying = !isPlaying;
    }
    
    function handleTextChange() {
        dispatch('textUpdate', { text: userText });
    }
</script>

<style>
    .dropdown {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        width: 100%;
    }

    form {
        width: 100%;
        max-width: 800px;
        padding: 30px;
        border: 1px solid #ccc;
        border-radius: 12px;
        background-color: #f9f9f9;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    textarea {
        width: 100%;
        height: 300px;
        padding: 20px;
        margin-bottom: 25px;
        border: 2px solid #ccc;
        border-radius: 8px;
        box-sizing: border-box;
        resize: vertical;
        font-size: 16px;
        line-height: 1.5;
        font-family: Arial, Helvetica, sans-serif;
    }

    textarea:focus {
        border-color: #3BB3FF;
        outline: none;
        box-shadow: 0 0 0 3px rgba(59, 179, 255, 0.1);
    }

    .file-input {
        display: none;
    }

    .file-info {
        margin-top: 10px;
        padding: 10px;
        background-color: #e9f7fe;
        border: 1px solid #3BB3FF;
        border-radius: 4px;
    }

    .file-name {
        font-weight: bold;
        color: #3BB3FF;
    }

    .remove-file {
        background: none;
        border: none;
        color: #ff4444;
        cursor: pointer;
        margin-left: 10px;
        font-size: 14px;
    }

    .remove-file:hover {
        text-decoration: underline;
    }

    .button-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .primary, .secondary { 
        padding: 12px 25px;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 16px;
        font-weight: 500;
    }
    
    .primary { 
        background-color: #3BB3FF;
    }
    
    .secondary { 
        background-color: #b1b2b3;
    }

    .primary:hover, .secondary:hover {
        background-color: #3BB3FF;
         transform: translateY(-2px);
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .play-pause-button {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 60px;
        height: 60px;
        background-color: #3BB3FF;
        border: none;
        border-radius: 50%;
        color: white;
        font-size: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        z-index: 100;
    }
    
    .play-pause-button:hover {
        background-color: #3399ff;
         transform: translateY(-2px);
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
</style>

<div class="dropdown">
    <form on:submit={handleSubmit}>
        <textarea 
            bind:value={userText}
            on:input={handleTextChange}
            rows="8" 
            placeholder="Enter your text here...">
        </textarea>
        
        <input 
            type="file" 
            id="file-input" 
            class="file-input" 
            accept=".txt,.pdf,.jpg,.jpeg,.png,.gif"
            on:change={handleFileUpload}
        />
        
        <div class="button-container">
            <button class="secondary" type="button" on:click={triggerFileInput}>Upload</button> 
            <button class="primary" type="submit">Submit</button>
        </div>
        
        {#if selectedFile}
            <div class="file-info">
                <span class="file-name">{fileName}</span>
                <button class="remove-file" type="button" on:click={removeFile}>Remove</button>
            </div>
        {/if}
    </form>
</div>

<button class="play-pause-button" on:click={togglePlay}>
    {#if isPlaying}
        ⏸️
    {:else}
        ▶️
    {/if}
</button>