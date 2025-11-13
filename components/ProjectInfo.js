export default function ProjectInfo() {
  
  const repoUrl = "https://github.com/ddisalvo1992/nextjs-assignment";

  return (
    <div style={{ margin: '10px' }}>
      <h3>Final Project Idea: Public Polling Website</h3>
      
      <p>
        <strong>Polling Website: My partner and I will be creating a website where users can make an account, 
        create public polls, and have other people answer them.</strong>
      </p>

      <a href={repoUrl} target="_blank" rel="noopener noreferrer">
        https://github.com/ddisalvo1992/nextjs-assignment
      </a>
    </div>
  );
}
