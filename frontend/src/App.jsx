import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import DocumentsView from './content/DocumentsView.jsx'
import CodeSnippetsView from './content/CodeSnippetsView.jsx'
import YoutubeVideosView from './content/YoutubeVideosView.jsx';
import GitReposView from './content/GitReposView.jsx';
import './App.css'


function App() {
  const [selectedCategory, setSelectedCategory] = useState('documents');
  const [searchTerm, setSearchTerm] = useState("");

  const renderContent = () => {
    switch (selectedCategory) {
      case 'documents':
        return <DocumentsView searchTerm={searchTerm} />;
      case 'youtube':
        return <YoutubeVideosView searchTerm={searchTerm} />;
      case 'git':
        return <GitReposView searchTerm={searchTerm} />;
      case 'snippets':
        return <CodeSnippetsView searchTerm={searchTerm} />;
      default:
        return null;
    }
  };
  useEffect(()=>{
    handleLoading();
  },[])
  const handleLoading = async () =>{
    try{
      const res = await fetch("http://localhost:5000/");
      if(res.ok){
        console.log("Successfully Done");
      }
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header
          title="DevLink Pro"
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <div className="flex flex-1 overflow-hidden bg-slate-950">
          <Sidebar selectedType={selectedCategory} onSelect={setSelectedCategory} />

          <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto bg-slate-900/60 border-l border-slate-800">
            {renderContent()}
          </main>
        </div>
      </div>
    </>
  )
}

export default App
