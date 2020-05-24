import React from 'react';
import FamilyTree from '../FamilyTree/FamilyTree'
import TreeProfile from '../TreeProfile/TreeProfile'
import treeData from '../../data/tree-data.json'
import treePhoto from '../../img/tree_profiles/bug_free_tree.jpg'
import NavBar from '../NavBar';
import TreeHome from '../../pages/TreeHome/TreeHome'
import Leaderboard from '../../pages/Leaderboard/Leaderboard'

import './App.css';

function App() {
  return (
    <div>
      {/* Tree profile section */}
      <NavBar />
      <div className="tree-profile">
        <TreeProfile 
          treeName="Bug-free Tree" 
          treeDescription="Hello! We are a tree that aims to have no bugs in our code. We bond over lots and lots of chicken wings, and we never get tired of LeetCode!"
          treePhoto={treePhoto}
          points={0}
          isActive={false}
        />
      </div>
      {/* Actual tree */}
      <div className = "tree">
        <FamilyTree treeData={treeData}/>
      </div>
      <Leaderboard/>
    </div>
  );
}

export default App;
