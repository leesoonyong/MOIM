package com.woorikiri.common.command;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.woorikiri.front.moim.dao.MoimDAO;
import com.woorikiri.front.moim.vo.MoimVO;

public class MoimMoveModifyComm implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String info = request.getParameter("sq");
		
		//MoimVO vo = MoimDAO.getMoimMoveModify("info");
		
		//request.setAttribute("moinModify", vo);
		
		return "MoimMod.jsp";
	}

}
