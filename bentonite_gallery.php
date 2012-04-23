<?php
	$dir = './img/picgallery';
	$allowed_type = array('jpg','jpeg','png','gif');
  $d = dir($dir);
	$pics_len=0;
	
 while( $f = $d->read() ){
	 $file_type = end(explode('.',$f));
		 if( !in_array(strtolower($file_type),$allowed_type) ) continue;
 		 	echo "<div><img src='$dir/$f' /></div>";
				$file_name = substr($f,0,-strlen($file_type)-1);
         $desc_path = "$dir/$file_name.txt";
         //$desc_text = file_exists($desc_path) ? file_get_contents($desc_path) : ""; // remove for dummies
 		
          if( file_exists($desc_path) ){
 	 	
           $desc_text = file_get_contents($desc_path);
 	 	
         }else{
 	 
           $desc_text = "";
 	 	
        }
 	 	

 	
          echo "<div><div class='desc'>$desc_text</div><img src='$dir/$f' /></div>";
		  
		        $pics_len ++;
	
         }

     
?>