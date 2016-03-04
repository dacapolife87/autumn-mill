package jong;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.OutputStreamWriter;

import org.json.simple.JSONArray;
//二쇰Ц�댁뿭����옣�섍린 �꾪븳 �대옒��
public class FileWrite{
	static String filePath;
	String selllist;
	static FileWriter fw = null;
	// �뚯씪��二쇰Ц�댁뿭 湲곕줉

	public static void writeFileIO(JSONArray mainarr){
		System.out.println("here>???0f");
		filePath = "C:/Users/dacapolife/Documents/GitHub/autumnmill-server/dbtest/WebContent/at1/JSONFile.json";
		FileOutputStream fos;
		File f1 = new File(filePath);

		try {



					fos = new FileOutputStream(f1);
					OutputStreamWriter osw = new OutputStreamWriter(fos, "UTF-8");
					BufferedWriter bw = new BufferedWriter(osw);
					bw.write(mainarr.toString());
					bw.flush();
					osw.close();
					fos.close();
					} catch (Exception e) {
					e.printStackTrace();
				}


	}
}

